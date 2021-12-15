import json
import sys
output = {}
for index, argv in enumerate(sys.argv):
    output[index] = argv

with open('./data/index.json', 'w') as f:
    json.dump(output, f)
