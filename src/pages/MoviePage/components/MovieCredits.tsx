import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetch } from 'hooks/useFetch';
import { Image } from 'components/Image';

export const MovieCredits: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = `/movie/${id}/credits`;
  const { response, error, isLoading, doFetch } = useFetch(apiUrl);
  const credits = response?.cast;

  useEffect(() => {
    doFetch();
  }, [doFetch, id]);

  return credits ? (
    <div className="container mt-4">
      <div className="row">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {credits.length ? (
          credits.map((actor) => (
            <div key={actor.id} className="col-2 mb-2">
              <figure className="figure">
                <Image
                  imagePath={actor.profile_path}
                  className="figure-img img-fluid rounded movie-page-image"
                  alt={actor.name}
                />
                <figcaption className="figure-caption">{actor.name}</figcaption>
              </figure>
            </div>
          ))
        ) : (
          <p>No Credits</p>
        )}
      </div>
    </div>
  ) : (
    <p>No Credits</p>
  );
};
