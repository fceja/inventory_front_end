import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import "@scss/components/mainFolderPage/FolderTreeButton.scss"
import { RootState } from "@store/ConfigureStore";
import FolderTree from "@common/components/FolderTree"
import { setIsFolderTreeModalOpen, ModalActionT } from "@store/modal/ModalActions";

/* temp, remove */
const FOLDERS = [
    {
        "folderId": 0,
        "name": "Root Folder",
        "parentFolderId": null,
        "level": 0
    },
    {
        "folderId": 1,
        "name": "Folder 1 - Web Store",
        "parentFolderId": 0,
        "level": 1
    },
    {
        "folderId": 2,
        "name": "Folder 2 - Warehouse",
        "parentFolderId": 0,
        "level": 1
    },
    {
        "folderId": 3,
        "name": "Folder 3 - Merch ",
        "parentFolderId": 1,
        "level": 2
    },
    {
        "folderId": 6,
        "name": "Folder 6 - Isle A",
        "parentFolderId": 2,
        "level": 2
    },
    {
        "folderId": 4,
        "name": "Folder 4 - Shirts",
        "parentFolderId": 3,
        "level": 3
    },
    {
        "folderId": 5,
        "name": "Folder 5 - Sweatshirt",
        "parentFolderId": 3,
        "level": 3
    }
]

const FolderTreeButton = () => {
    const dispatch: Dispatch<ModalActionT> = useDispatch();
    const { isFolderTreeModalOpen } = useSelector((state: RootState) => state.modalState);

    return (
        <>
            <span
                className="folder-tree-btn"
                onClick={() => dispatch(setIsFolderTreeModalOpen(!isFolderTreeModalOpen))}>
                {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z" /></svg>
            </span>
            {isFolderTreeModalOpen &&
                <FolderTree folders={FOLDERS} upToFolderId={0} />
            }
        </>
    )
}

export default FolderTreeButton
