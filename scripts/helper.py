#!/usr/bin/python3

import cgi
formData = cgi.FieldStorage()

def get_input():
    data = {}
    if (formData):
        for key in formData.keys():
            data[key] = formData[key].value
    return data