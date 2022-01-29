import Sidebar from '../components/Sidebar'
import CreatePostModal from '../components/Posts/CreatePostModal';

import Image from 'next/image';

const Post = () => {
    return (
        <div className="posts">
            <Sidebar />
            <div className="content-wrapper relative">
                <CreatePostModal />
                <div className="find-post"></div>
            </div>
        </div>
    )
}

export default Post;