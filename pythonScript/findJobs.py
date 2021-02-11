from bs4 import BeautifulSoup 
import requests 
import csv

import pandas as pd
import numpy as np
import json
import os
import re

import firebase_admin
from firebase_admin import firestore, credentials

name = input("Job name:\n").replace(" ","-")
city = input("City name:\n")
state = input("State name:\n")

res = requests.get(f'https://www.indeed.co.in/{name}-jobs-in-{city},-{state}')
print(res)

soup = BeautifulSoup(res.text,'html.parser')

job_name = soup.select('.jobtitle')

with open('jobs.csv', 'a',newline="\n",encoding="utf-8") as f:
                    writer = csv.writer(f)
                    writer.writerow(["title", "organization", "location", "salary", "url"])
for i in range(len(job_name)):
    job_name = soup.select('.jobtitle')[i].getText().strip()
    job_company = soup.select('.company')[i].getText().strip().replace(","," ")
    job_location = soup.select('.location')[i].getText().strip().replace(","," ")
    try :
        job_money = soup.select(".salaryText")[i].getText()
    except :
        job_money = ""
    h2 = soup.find('h2',{'class':'title'})
    a = h2.find('a')
    link = a.attrs.get("href")
    url = "https://www.indeed.co.in"+link
    row = [job_name,job_company,job_location,job_money,url]
    #print(row)
    with open('jobs.csv', 'a',newline="\n",encoding="utf-8") as f:
                    writer = csv.writer(f)
                    writer.writerow(row)



def jsonify_row(r):
    r['salary'] = re.sub(r'[^\x00-\x7f]',r'', r['salary'])
    out = {
        'title' : r['title'],
        'organization' : r['organization'],
        'location' : r['location'],
        'salary' : r['salary'],
        'url' : r['url']
    }

    return out

df = pd.read_csv('jobs.csv')
df.head()
df.salary = df.salary.fillna('-')
df.salary = df.salary.str.strip()
df['json'] = df.apply(lambda x : jsonify_row(x), axis=1)
cred = credentials.Certificate("secret.json")
firebase_admin.initialize_app(cred)
db = firestore.client()
for job in df.json.values:
    db.collection('indeedJobs').add(job)