from components import Users
from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db

ma=Marshmallow(app)
class Address(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    user_id=db.Column(db.Integer)
    Address=db.Column(db.String)
    pincode=db.Column(db.Integer)
    City=db.Column(db.String)
    State=db.Column(db.String)

    def __init__(self,Address,pincode,City,State,user_id):
        self.Address=Address
        self.pincode=pincode
        self.City=City
        self.State=State
        self.user_id=user_id

class Add_Schema(ma.Schema):
    class Meta:
        fields=('id','Address','pincode','City','State','user_id')

add_schema=Add_Schema()
adds_schema=Add_Schema(many=True) 

db.create_all()

@app.route('/address/<id>',methods=['POST','GET'])
def add_address(id):
    if request.method=='POST':
        user_id=id
        address=request.json['Address']
        pincode=request.json['pincode']
        city=request.json['City']
        State=request.json['State']

        new_add=Address(address,pincode,city,State,user_id)
        db.session.add(new_add)
        db.session.commit()
        return add_schema.jsonify(new_add)
    else:
        all_add=Address.query.filter_by(user_id=id)

        result = adds_schema.dump(all_add)

        return jsonify(result)