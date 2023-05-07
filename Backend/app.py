from flask import Flask,request,jsonify,json
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.app_context().push()
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///mydb.db'

db = SQLAlchemy(app)
ma=Marshmallow(app)


from components import *

if __name__==("__main__"):
    app.run(debug=True)






