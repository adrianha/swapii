#! /bin/bash

git remote add dokku dokku@$SWAPII_SERVER_IP:swapii
git push dokku master
