import sys
import numpy as np
from sklearn.linear_model import LinearRegression

amount = float(sys.argv[1])

X = np.array([[1],[2],[3],[4],[5]])
y = np.array([1000,1200,1400,1600,1800])

model = LinearRegression()
model.fit(X,y)

prediction = model.predict([[amount/500]])

print(int(prediction[0]))