# AI Finance Advisor

A full-stack financial analytics platform that predicts future spending using a machine learning model.

## Overview

AI Finance Advisor helps users track expenses and estimate next month's spending using a simple machine learning model.

The system integrates a **React frontend**, **Node.js backend**, and **Python ML model**.

## Features

* Expense input dashboard
* Category-based spending visualization
* Machine learning prediction for future spending
* Full-stack architecture
* Interactive pie chart analytics

## Tech Stack

Frontend:

* React.js
* Chart.js
* Axios

Backend:

* Node.js
* Express.js

Machine Learning:

* Python
* Scikit-learn
* NumPy

## Project Structure

ai-finance-advisor
├── frontend (React dashboard)
├── backend (Node.js API server)
├── ml-model (Python ML model)
└── README.md

## Installation

### 1. Clone the repository

git clone https://github.com/YOURUSERNAME/ai-finance-advisor.git

### 2. Install frontend dependencies

cd frontend
npm install

### 3. Install backend dependencies

cd ../backend
npm install

### 4. Install ML dependencies

cd ../ml-model
pip install -r requirements.txt

## Running the Project

Start backend server:

node server.js

Start frontend:

npm start

Open in browser:

http://localhost:3000

## Machine Learning Model

The project uses a simple **Linear Regression model** to demonstrate expenditure prediction.

In production systems, more advanced models such as:

* ARIMA
* LSTM
* Prophet

could be used for financial forecasting.

## Author

Shiva Nandan R
