from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db

ma = Marshmallow(app)

class Cart(db.Model):
    user_id=db.Column(db.Integer)
    book_id=db.Column(db.Integer)
    qty = db.Column(db.Integer)
    
    cart_id=db.Column(db.Integer,primary_key=True)

    def __init__(self,user_id,book_id,qty):
        self.book_id=book_id
        self.user_id=user_id
        self.qty=qty
       
    
class cartSchema(ma.Schema):
    class Meta:
        fields=('cart_id','book_id','user_id','qty')
    
cart_schema=cartSchema()
carts_schema=cartSchema(many=True)

db.create_all()

@app.route('/cart/<id>',methods=['POST','GET'])
def cart(id):
    if request.method=='POST':
        user_id=id
        book_id=request.json['book_id']
        qty=request.json['qty']
        
        new_item= Cart(user_id,book_id,qty)

        db.session.add(new_item)
        db.session.commit()
        return cart_schema.jsonify(new_item)
    else:
        all_items=Cart.query.filter_by(user_id=id)
        result=carts_schema.dump(all_items)
        return jsonify(result)