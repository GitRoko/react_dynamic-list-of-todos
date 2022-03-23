import React, { useEffect, useState } from 'react';
import { getUser } from '../../api';
import './CurrentUser.scss';

type Props = {
  userId: number,
  onSetSelectedUserId: (id: number) => void,
};

export const CurrentUser: React.FC<Props> = ({ userId, onSetSelectedUserId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    getUser(userId)
      .then(setUser)
      .catch((error) => setError(error.toString()));
  }, [userId]);

  if (errorText) {
    return (
      <div>
        {errorText}
      </div>
    );
  }

  return (
    <div className="CurrentUser">
      {user ? (
        <>
          <h2 className="CurrentUser__title">
            <span>
              Selected user:&nbsp;#
              {userId}
            </span>
          </h2>

          <h3 className="CurrentUser__name">{user.name}</h3>
          <p className="CurrentUser__email">{user.email}</p>
          <p className="CurrentUser__phone">{user.phone}</p>
          <button
            className="
              TodoList__user-button
              TodoList__user-button--selected
              button
            "
            type="button"
            onClick={() => onSetSelectedUserId(0)}
          >
            Clear
          </button>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
