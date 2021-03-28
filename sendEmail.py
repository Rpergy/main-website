#!/usr/bin/python3

import smtplib
#SERVER = "localhost"

FROM = 'no-reply@rpergy.dev'

TO = ["ryanp@rpergy.dev"] # must be a list

SUBJECT = "hello"

TEXT = "blahblahblahblahblah"

# Prepare actual message

message = """\
From: %s
To: %s
Subject: %s

%s
""" % (FROM, ", ".join(TO), SUBJECT, TEXT)

# Send the mail

s = smtplib.SMTP_SSL('smtp.dreamhost.com', 465)

s.set_debuglevel(1)

s.login(FROM, "wildC@mel10")

s.sendmail(FROM, TO, message)
s.quit()
