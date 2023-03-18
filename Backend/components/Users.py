from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db
from components import Address

ma=Marshmallow(app)

class User(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String,unique=True)
    email = db.Column(db.String)
    ph_no=db.Column(db.Integer)
    Addresses=db.relationship('Address',backref='user')

    def __init__(self,name,email,ph_no):
        self.name=name
        self.email=email
        self.ph_no=ph_no
        

class UserSchema(ma.Schema):
    class Meta:
        fields=('id','name','email','ph_no')

user_schema=UserSchema()
users_schema=UserSchema(many=True)

db.create_all()

@app.route('/user',methods=['POST','GET'])
def add():
    if request.method=="POST":

        name = request.json['name']
        email=request.json['email']
        ph_no=request.json['ph_no']
        

        user=User(name,email,ph_no)
        db.session.add(user)
        db.session.commit()

        return user_schema.jsonify(user)
    else:
        all_user= User.query.all()
        result= users_schema.dump(all_user)
        return jsonify(result)