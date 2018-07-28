import PropTypes from 'prop-types';

export const ArticleProps = PropTypes.shape({
    lang: PropTypes.string.isRequired,
    context: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
});

export const ArticleShape = PropTypes.shape({
    props: ArticleProps.isRequired,
    content: PropTypes.string.isRequired,
});

export const ArticlesShape = PropTypes.arrayOf(ArticleShape);