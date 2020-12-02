import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useParams } from 'react-router';
import { useFetch } from 'hooks/useFetch';
import { TabContent, TabPane } from 'reactstrap';
import {
  MovieTabs,
  MovieDetails,
  MoviePreview,
  MovieVideos,
  MovieCredits,
} from './components/';

export const MoviePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const apiUrl = `/movie/${id}`;
  const { response: movie, error, isLoading, doFetch } = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch, id]);

  return (
    <div className="container">
      <MoviePreview movie={movie} />
      <div className="row ml-5 mt-5">
        <div className="col-12 loader">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          <MovieTabs />
          <TabContent>
            <TabPane>
              <Switch>
                <Route path="/movie/:id/details">
                  <MovieDetails movie={movie} />
                </Route>
                <Route path="/movie/:id/videos" component={MovieVideos} />
                <Route path="/movie/:id/credits" component={MovieCredits} />
                <Redirect to={`/movie/${id}/details`} />
              </Switch>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};
