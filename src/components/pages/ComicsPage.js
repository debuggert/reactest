import ComicsList from '../comicsList/ComicsList';
import AppBanner from "../appBanner/AppBanner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
    return(
        <>
            <AppBanner/>
            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary>

            {/* <ErrorBoundary>
                <SingleComic/>
            </ErrorBoundary> */}
        </>
    )
}

export default ComicsPage;