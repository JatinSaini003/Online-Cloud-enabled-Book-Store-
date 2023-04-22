from flask import request,json,jsonify
from app import app
from flask_marshmallow import Marshmallow
from app import db
from components import Books
ma=Marshmallow(app)
class Orders(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    book_id=db.Column(db.Integer)
    user_id=db.Column(db.Integer)
    status=db.Column(db.String)
    dod=db.Column(db.String)
    pay_mode=db.Column(db.String)

    def __init__(self,book_id,user_id,status,dod,pay_mode):
        self.book_id=book_id
        self.user_id=user_id
        self.status=status
        self.dod=dod
        self.pay_mode=pay_mode

class orderSchema(ma.Schema):
    class Meta:
        fields=('id','book_id','user_id','status','dod','pay_mode')

order_schema=orderSchema()
orders_schema=orderSchema(many=True)

db.create_all()

@app.route('/orders/<book_id>',methods=['POST','GET'])
def orders(book_id):
    if request.method=='POST':
        user_id=request.json['user_id']
        status=request.json['status']
        dod=request.json['dod']
        pay_mode=request.json['pay_mode']
        new_order=Orders(book_id,user_id,status,dod,pay_mode)
        db.session.add(new_order)
        db.session.commit()

        return order_schema.jsonify(new_order)
    else:
        all_orders = Orders.query.filterby(book_id=book_id)

        result = orders_schema.dump(all_orders)

        return jsonify(result)

@app.route('/orders/<user_id>',methods=['GET'])
def get_orders(user_id):
    all_orders = Orders.query.filterby(user_id=user_id)
    result=orders_schema.dump(all_orders)
    return jsonify(result)