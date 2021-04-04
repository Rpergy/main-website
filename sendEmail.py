#!/usr/bin/python3

import smtplib
import cgitb
from helper import get_input
from email.message import EmailMessage

cgitb.enable()

input = get_input()

if(input):
    if(input["action"] == "order"):
        msg = EmailMessage()
        msg.set_content("Hey " + input["name"] + ", \nThank you for ordering from Rpergy Dev! Here are your order details: \n\n" + "Standard Pages: " + input["standardPages"] + "\nPro Pages: " + input["proPages"] + "\nBusiness Pages: " + input["businessPages"] + "\nPrice: " + input["price"] + "\n\n\nOther information you entered:\n" + 'Email: ' + input["email"] + "\nPhone: " + input["phone"] + "\n\nYou will be contacted within 1 business day to start planning your digital journey.\n\nThanks, \nRpergy")

        msg['Subject'] = 'Rpergy Dev Order Confirmation'
        msg['From'] = "noreply@rpergy.dev"
        msg['To'] = input["email"]
        msg['Cc'] = "ryanp@rpergy.dev"

        # Send the message via our own SMTP server.
        server = smtplib.SMTP_SSL('smtp.dreamhost.com', 465)
        server.login("noreply@rpergy.dev", "wildC@mel10")
        server.send_message(msg)
        server.quit()
    elif(input["action"] == "contact"):
        msg = EmailMessage()
        msg.set_content("New Rpergy Dev contact question:\n" + "Name: " + input["name"] + "\nEmail: " + input["email"] + "\nMessage: " + input["message"])

        msg['Subject'] = 'Rpergy Dev New Question'
        msg['From'] = "support@rpergy.dev"
        msg['To'] = "ryanp@rpergy.dev"

        # Send the message via our own SMTP server.
        server = smtplib.SMTP_SSL('smtp.dreamhost.com', 465)
        server.login("support@rpergy.dev", "wildC@mel10")
        server.send_message(msg)
        server.quit()
