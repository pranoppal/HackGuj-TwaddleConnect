from flask import Flask
from flask_jwt import JWT
from flask_restful import Api
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv, find_dotenv
import os
import json

# from security import authenticate, identity
# from resources.user import UserRegister
# from resources.item import Item, ItemList
# from resources.store import Store, StoreList
# from models.educator import EducatorModel
from resources.educator import EducatorRegister
from resources.educator import EducatorService
from resources.educator import EducatorAnalytics
# from models.student import StudentModel
from resources.student import StudentRegister
from resources.student import StudentService
# from models.organisation import OrganisationModel
from resources.organisation import OrganisationRegister
# from models.post import PostModel
from resources.post import PostCreate, PostClap, PostFetch, PostComment
from resources.interests import Interests
from models.club import ClubModel
from utils.analytics import fetch_analytics_data, generate_distribution_data

load_dotenv(find_dotenv())
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ["DATABASE_URL"]
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'secret'
api = Api(app)
cors = CORS(app, origins="*", allow_headers=["Content-Type"], intercept_exceptions=False)
from db import db
db.init_app(app)


@app.before_first_request
def create_tables():
    db.create_all()


@app.route("/")
def index():
    val = fetch_analytics_data("V", "gujarat public school")
    response = generate_distribution_data()
    return val
# Adding /auth end point:
# jwt = JWT(app, authenticate, identity)

# api.add_resource(Store, '/store/<string:name>')
# api.add_resource(Item, '/item/<string:name>')
# api.add_resource(ItemList, '/items')
# api.add_resource(StoreList, '/stores')
api.add_resource(EducatorRegister, '/api/educator_register')
api.add_resource(StudentRegister, '/api/student_register')
api.add_resource(OrganisationRegister, '/api/organisation_register')

api.add_resource(PostCreate, '/api/create_post')
api.add_resource(PostClap, "/api/clap_for_post")
api.add_resource(PostComment, "/api/comment_on_post")
api.add_resource(PostFetch, "/api/posts")

api.add_resource(Interests, "/api/interests")

api.add_resource(EducatorService, '/api/educator/<string:uuid>')
api.add_resource(StudentService, '/api/student/<string:uuid>')

api.add_resource(EducatorAnalytics, '/api/insights')


# Name is only set to main when file is explicitly run (not on imports):
if __name__ == '__main__':
    app.run(port=5000, debug=True)
