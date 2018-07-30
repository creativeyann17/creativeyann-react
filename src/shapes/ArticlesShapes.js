import PropTypes from 'prop-types';

export const ArticleShape = PropTypes.shape({
    lang: PropTypes.string.isRequired,
    context: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    repository: PropTypes.string.isRequired,
});


export const ArticlesShape = PropTypes.arrayOf(ArticleShape);