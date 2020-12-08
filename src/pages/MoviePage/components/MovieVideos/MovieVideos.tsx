import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { useFetch } from 'hooks/useFetch';

import './MovieVideos.styles.scss';

export const MovieVideos: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = `/movie/${id}/videos`;
  const { response, error, isLoading, doFetch } = useFetch(apiUrl);
  const videos = response?.results;

  useEffect(() => {
    doFetch();
  }, [doFetch, id]);

  const getUrlBySite = (video) =>
    video?.site === 'YouTube'
      ? `https://www.youtube.com/embed/${video.key}`
      : `https://player.vimeo.com/video/${video.key}?title=0&byline=0&portrait=0&badge=0`;

  return videos ? (
    <div className="container mt-3">
      <div className="row mb-3">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        {videos.length ? (
          videos.map((video) => (
            <div className="col-6 mb-3 movie-videos__single" key={video.id}>
              <iframe
                className="tabs-box"
                width="560"
                height="315"
                src={getUrlBySite(video)}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.name}
              ></iframe>
            </div>
          ))
        ) : (
          <p>No Videos</p>
        )}
      </div>
    </div>
  ) : (
    <p>No Videos</p>
  );
};
