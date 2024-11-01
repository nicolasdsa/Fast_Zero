from dataclasses import asdict

from sqlalchemy import select

from fast_zero.models import Todo, User


def test_create_user(session, mock_db_time):
    with mock_db_time(model=User) as time:
        new_user = User(
            username='nicolas', password='teste', email='teste@gmail.com'
        )
        session.add(new_user)
        session.commit()

        user = session.scalar(select(User).where(User.username == 'nicolas'))

    assert asdict(user) == {
        'id': 1,
        'username': 'nicolas',
        'password': 'teste',
        'email': 'teste@gmail.com',
        'todos': [],
        'created_at': time,
        'updated_at': time,
    }


def test_create_todo(session, user: User):
    todo = Todo(
        title='Test Todo',
        description='Test Descrição',
        state='draft',
        user_id=user.id,
    )

    session.add(todo)
    session.commit()
    session.refresh(todo)

    user = session.scalar(select(User).where(User.id == user.id))

    assert todo in user.todos
