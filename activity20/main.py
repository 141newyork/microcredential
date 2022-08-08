from flask import Flask, render_template, request

app = Flask(__name__)

class Data(db.Model):
    __tablename__ ="data"

    id=db.Column(db.Integer,primary_key=True)
    email=db.Column(db.String(120),unique = True)

    def __init__(self,email):
        self.email=email
@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/",methods =["POST"])
def thankyou():
    if request.method == "POST":
        email = request.form["email_name"]
        print(request.form)
    return render_template("thankyou.html")

@app.route("/about")
def aboutUs():
    return "<h1>About Us</h1>"
if __name__ =="__main__":
    app.run()
    app.debug =True
