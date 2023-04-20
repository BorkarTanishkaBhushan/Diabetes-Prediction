from flask import *
import random
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler, OneHotEncoder
from sklearn.compose import make_column_transformer

app = Flask(__name__,template_folder='templates', static_folder='static')

#loading the model
#model = joblib.load("diabetes.joblib.dat")
model=pickle.load(open("diabetes_model.pkl",'rb'))
#xgb_reg =joblib.load("xgb_reg.sav")
#model_xgb_2 = xgb.Booster()
#model_xgb_2.load_model("model.json")




# Landing Page
@app.route('/', methods=['GET', 'POST'])
def landingpage():
  return render_template('landingPage.html')

@app.route('/in_form', methods=['GET', 'POST'])
def get_form():
    return render_template('form.html')

      # features = [np.array(float_....)]
     # prediction = model.form(features)
      # bmi = float[]
    

@app.route('/result', methods=['POST','GET'])
def result():
  if request.method == 'POST':
    name = request.form["name"]
    gender = request.form["gender"]
    age = request.form["Age"]
    height=float(request.form["height"])
    weight = float(request.form["weight"])
    bpvalue = float(request.form["highBP"])
    cholvalue = float(request.form["highChol"])
    smoker = float(request.form["smoker"])
    stroke = float(request.form["stroke"])
    heart = float(request.form["HeartDiseaseorAttack"])
    physical = float(request.form["PhysActivity"])
    walk = float(request.form["Diffwalk"])
    veggies = float(request.form["Veggies"])
    fruits = float(request.form["Fruits"])
    alcohol = float(request.form["HeavyAlcoholConsumption"])
    genHealth=float(request.form["genHealth"])
    phyHealth=float(request.form["phyHealth"])
    bmi = [weight/(height*height)]
    f=[bpvalue,cholvalue,bmi,smoker,stroke,heart,physical,veggies,alcohol,genHealth,phyHealth,walk,gender,age]
    df = pd.DataFrame({"bpvalue":f[0], "cholvalue":f[1], "bmi":f[2], "smoker":f[3], "stroke":f[4], "heart":f[5], "physical":f[6], "veggies":f[7], "alcohol":f[8], "genHealth":f[9], "phyHealth":f[10], "walk":f[11], "gender":f[12], "age":f[13] }, index=[0])

    X_test_ct = df.to_numpy()
    prediction = model.predict(X_test_ct)
    if prediction==0:
      txt="The model says you are Diabetes Free."
    else:
      txt="We advise you to see a Doctor as soon as possible !"
    return render_template('result.html',name=name,features=txt)

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=8001, debug=True)











