from flask import Flask,request,jsonify,json
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///mydb.db'

db = SQLAlchemy(app)
ma=Marshmallow(app)


@app.route("/",methods=['GET'])
def welcome():
    return "welcome to Python data-api"

from components import *

if __name__==("__main__"):
    debug=True






