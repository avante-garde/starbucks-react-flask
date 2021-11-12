from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://@localhost/starbucks'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Menu(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(100))
  superCategory = db.Column(db.String(100))
  category = db.Column(db.String(100))
  subCategory = db.Column(db.String(100))
  imageUrl = db.Column(db.String(255))

  def __init__(self, name, superCategory, category, subCategory, imageUrl):
    self.name = name
    self.superCategory = superCategory
    self.category = category
    self.subCategory = subCategory
    self.imageUrl = imageUrl

  def to_json(self):
        return {
            "name": self.name,
            "superCategory": self.superCategory,
            "category": self.category,
            "subCategory": self.subCategory,
            "imageUrl": self.imageUrl
        }

@app.route('/')
def index():
  return "Hello, world"

@app.route('/api/menu', methods = ['GET'])
@cross_origin()
def getMenu():
  menu = Menu.query.all()
  resp = jsonify([obj.to_json() for obj in menu])
  return resp

if __name__ == '__main__':
  app.run(debug=True)