#!/bin/sh

curl -XDELETE 'http://192.168.11.173:9200/conflicting_field_type'
echo
curl -XDELETE 'http://192.168.11.173:9200/twitter'
echo
