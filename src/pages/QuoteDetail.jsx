import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {id: "q1", author: "Jeff", text: "Focus on your customers."},
  {id: "q2", author: "Warren", text: "You need a good temperament."},
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if(!quote){
    return <p>No quote found.</p>;
  }
  
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}>
      </HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
        <Link to={`${match.url}/comments`} className="btn--flat">Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>);
};

export default QuoteDetail;