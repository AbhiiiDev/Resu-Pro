#!/usr/bin/env python
# coding: utf-8

# In[250]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
import seaborn as sns


# In[251]:


file=pd.read_csv("resu.csv",nrows=891)


# In[252]:


file


# In[253]:


y=file[['Category']]
x=file[['Resume']]


# In[254]:


import re
import nltk

from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
ps = PorterStemmer()
c = []
for i in range(0, len(x)):
    r=re.sub('[^a-zA-Z]', ' ',x['Resume'][i])
    r=r.lower()
    r=r.split()

    r=[ps.stem(word) for word in r if not word in stopwords.words('english')]
    r=' '.join(r)
    c.append(r)

c


# In[259]:


from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer()
x = cv.fit_transform(c).toarray()
print(x)
type(x)
print(y)
type(y)


# In[260]:


from sklearn.model_selection import train_test_split
x_t, x_test, y_t, y_test = train_test_split(x, y,test_size = 0.3, random_state = 15)
x_train, x_val, y_train, y_val = train_test_split(x_t, y_t, test_size = 0.1,random_state = 2)
x_train.shape


# In[261]:


from sklearn.naive_bayes import MultinomialNB
f= MultinomialNB().fit(x_train, y_train)


# In[262]:


q=pd.read_csv("resu.csv")
q=q.iloc[892:961]
q


# In[263]:


X=q['Resume'][892]
X


# In[264]:


s=
r=[]
p=re.sub('[^a-zA-Z]', ' ',s)
p = p.lower()
p = p.split()
p = [ps.stem(word) for word in p if not word in stopwords.words('english')]
p = ' '.join(p)

r.append(p)

z=cv.transform(r).toarray()


# In[265]:


y_pred_2=f.predict(z)


# In[266]:


if y_pred_2==1:
    print("Data Science Engineer")
if y_pred_2==2:
    print("HR")
if y_pred_2==3:
    print("Advocate")
if y_pred_2==4:
    print("Arts")
if y_pred_2==5:
    print("Web D")
if y_pred_2==6:
    print("Mechanical Engineer")
if y_pred_2==7:
    print("Sales")
if y_pred_2==8:
    print("Health And Fitness")
if y_pred_2==9:
    print("Civil")
if y_pred_2==10:
    print("Java")
if y_pred_2==11:
    print("Business Analyst")
if y_pred_2==12:
    print("SAP")
if y_pred_2==14:
    print("Electrical Engineer")


# In[ ]:





# In[202]:


#if y_pred_2==1


# In[203]:


ds=pd.read_csv("ds_resu.csv",nrows=500)


# In[204]:


x=ds[['Education and Skills']]
x


# In[205]:


import re
import nltk

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

ps = WordNetLemmatizer()
c = []
for i in range(0, len(ds)):
    r=re.sub('[^a-zA-Z]', ' ',ds['Education and Skills'][i])
    r=r.lower()
    r=r.split()

    r=[ps.lemmatize(word) for word in r if not word in stopwords.words('english')]
    r=' '.join(r)
    c.append(r)
c


# In[206]:


from sklearn.feature_extraction.text import TfidfVectorizer
cv = TfidfVectorizer()
x = cv.fit_transform(c).toarray()
print(x)


# In[207]:


from sklearn.preprocessing import StandardScaler, MinMaxScaler
scaler = MinMaxScaler()  

scaled_experience = scaler.fit_transform(ds['Experience'].values.reshape(-1, 1))
print(scaled_experience)
X=np.concatenate((scaled_experience, x), axis=1)

#scaled_data = np.concatenate(scaled_experience, x.values.reshape(-1,1)), axis=1)


# In[208]:


print(scaled_experience)
y=ds[['Score (out of 100)']]
print(y)


# In[209]:


from sklearn.model_selection import train_test_split
X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=1/3,random_state=1)
print (X_train[0])


# In[210]:


from sklearn.ensemble import RandomForestRegressor
lr=RandomForestRegressor(n_estimators=400)
lr.fit(X,y)


# In[211]:


y_pred=lr.predict(X_test)
print(y_pred)
print(y_pred.shape)


# In[212]:


print(y_test)


# In[213]:


plt.scatter(y_pred,y_test,color="green")


# In[232]:


s=""
r=[]
p=re.sub('[^a-zA-Z]', ' ',s)
p = p.lower()
p = p.split()
p = [ps.lemmatize(word) for word in p if not word in stopwords.words('english')]
p = ' '.join(p)

r.append(p)

z=cv.transform(r).toarray()

print(z)


# In[233]:


u=1
ds_ex=np.array(u)
ds_ex=scaler.transform(ds_ex.reshape(-1,1))


# In[234]:


ds_ex


# In[235]:


input=np.concatenate((ds_ex,z),axis=1)


# In[236]:


input


# In[237]:


#score_generation of that classified resume

scoreds=lr.predict(input)
scoreds
print(scoreds[[0]])


# In[238]:


from sklearn import metrics
print(metrics.r2_score(y_pred,y_test.iloc[0:168]))


# In[221]:


y_test


# In[ ]:





# In[ ]:




