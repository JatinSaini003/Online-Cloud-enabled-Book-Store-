from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db
from components import Address

ma=Marshmallow(app)

class User(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String,unique=True)
    email = db.Column(db.String)
    password=db.Column(db.String)
    first_name=db.Column(db.String)
    Last_name=db.Column(db.String)

    def __init__(self,username,email,password,first_name,Last_name):
        self.username=username
        self.email=email
        self.password=password
        self.first_name=first_name
        self.Last_name=Last_name
        

class UserSchema(ma.Schema):
    class Meta:
        fields=('id','username','email','password','first_name','Last_name')

user_schema=UserSchema()
users_schema=UserSchema(many=True)

db.create_all()

@app.route('/user',methods=['POST','GET'])
def add():
    if request.method=="POST":
        username = request.json['username']
        email=request.json['email']
        password=request.json['password']
        first_name=request.json['first_name']
        Last_name=request.json['Last_name']
        user=User(username,email,password,first_name,Last_name)
        db.session.add(user)
        db.session.commit()

        return user_schema.jsonify(user)
    else:
        all_user= User.query.all()
        result= users_schema.dump(all_user)
        return jsonify(result)
    
@app.route('/user/<username>',methods=['GET'])
def get_user(username):
    user=User.query.filterby(username=username)

    return user_schema.jsonify(user)