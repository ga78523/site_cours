#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Feb  8 15:01:36 2020

@author: galand
"""

from PIL import Image,ImageDraw

img=Image.open("landscape.jpg")
print(img.format, img.size, img.mode)