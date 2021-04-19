// app/javascript/components/Library
import Subscription from '../Subscription';
import React, { useState } from "react";
import { Query } from "react-apollo";
import UpdateItemForm from "../UpdateItemForm";
import { LibraryQuery } from "./operations.graphql";
import cs from "./styles";

const Library = () => {
  const [item, setItem] = useState(null);
  const [errors, setErrors] = useState({});
  return (
    <Query query={LibraryQuery}>
      {({ data, loading, subscribeToMore }) => (
        <div className={cs.library}>
          {loading || !data.items
            ? "loading..."
            : data.items.map(({ title, id, user, imageUrl, description }) => (
              <button
                key={id}
                className={cs.plate}
                onClick={() => setItem({ title, imageUrl, id, description })}
              >
                <div className={cs.title}>{title}</div>
                <div>{description}</div>
                {imageUrl && <img src={imageUrl} className={cs.image} />}
                {user ? (
                  <div className={cs.user}>added by {user.email}</div>
                ) : null}
              </button>

            ))}
          {item !== null && (
            <UpdateItemForm
              id={item.id}
              initialTitle={item.title}
              errors={errors[item.id]}
              initialDescription={item.description}
              initialImageUrl={item.imageUrl}
              onClose={() => setItem(null)}
              onErrors={itemUpdateErrors => {
                if (itemUpdateErrors) {
                  setItem({
                    ...item,
                  });
                }
                setErrors({ ...errors, [item.id]: itemUpdateErrors });
              }}
            />
          )}
          <Subscription subscribeToMore={subscribeToMore} />
        </div>
      )}
    </Query>
  );
};

export default Library;
