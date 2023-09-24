#!/usr/bin/env python3

from app import db
from models import Task

if __name__ == '__main__':
    db.create_all()

    task1 = Task(title='FIFA 23', description='Playing FIFA 23 in mu PS4', done=False)
    task2 = Task(title='Exercise', description='Running and jogging for miles', done=True)
    task3 = Task(title='Swimming', description='Swimming at the pool', done=False)
    task4 = Task(title='Learning Coding', description='Practice coding for 1 hour', done=False)

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)

    db.session.commit()
