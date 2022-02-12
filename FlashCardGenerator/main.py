from flask import Flask, request
import json

# Initing Flask
app = Flask(__name__)

# Functions
def readDB():
    with open("", "r") as f:
        return json.loads(f.read())

def writeDB(data):
    with open("", "w") as f:
        f.write(json.dumps(data))

# API
@app.route("/addKanji", methods=["POST"])
def NAMAE():
    if request.method == "POST":
        if ("kanji" in request.args) and ("radical" in request.args) and ("meaning" in request.args) and ("kun" in request.args) and ("on" in request.args):
            
            readDB()["Kanjis"][request.args["kanji"]]={"kanji": request.args["kanji"], "radical": request.args["radical"].lower() in ["true"], "meaning": request.args["meaning"], "kun": request.args["kun"], "on": request.args["on"]}
            
            return "success"
        else:
            return "error"
    else:
        return "error"

# Starting Point
if __name__ == "__main__":
    app.run(port=80, debug=True)