# sorting using custom key
employees = [
    {'Name': 'Randika suridu', 'age': 23, 'salary': 15000},
    {'Name': 'Devinda Ravisara', 'age': 24, 'salary': 10000},
    {'Name': 'Thisara Thushan', 'age': 21, 'salary': 18000},
    {'Name': 'Pasan Jayawickrama', 'age': 21, 'salary': 13000},
]

# sort by name (Ascending order)
employees.sort(key=lambda x: x.get('Name'))
print(employees, end='\n\n')

# sort by Age (Ascending order)
employees.sort(key=lambda x: x.get('age'))
print(employees, end='\n\n')

# sort by salary (Descending order)
employees.sort(key=lambda x: x.get('salary'), reverse=True)
print(employees, end='\n\n')
