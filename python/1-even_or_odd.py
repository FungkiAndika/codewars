# def even_or_odd(number):
#     if number % 2 == 0 :
#         number = 'Even'
#     else :
#         number = 'Odd'
#     return number

# ALTER
# def even_or_odd(number):
#     return 'Even' if number % 2 == 0 else 'Odd'

# LAMBDA FUNCTION
even_or_odd = lambda number : 'Even' if number % 2 == 0 else 'Odd'

print(even_or_odd(4))