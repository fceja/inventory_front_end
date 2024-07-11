import { useEffect } from "react"
import { Dispatch } from "redux";
import { useDispatch } from 'react-redux';

import "@scss/pages/MainFoldersPage.scss"
import { setFolderData, FolderActionT } from "@store/folder/FolderActions";
import SelectionMenuAddNodes from "@components/mainFoldersPage/SelectionMenuAddNodes"
import FolderNavigation from "@components/mainFoldersPage/FolderNavigation"
import FolderContentNodes from "@components/mainFoldersPage/FolderContentNodes"
import FolderStats from "@components/mainFoldersPage/FolderStats"

const MainFoldersPage = () => {
    const dispatch: Dispatch<FolderActionT> = useDispatch();

    useEffect(() => {

        return () => {
            dispatch(setFolderData({
                folderId: null,
                folderName: null,
                parentFolderId: null
            }))
        }
    }, [])

    return (
        <main className="main-folders-page">
            <FolderNavigation />
            <FolderStats />
            <FolderContentNodes />
            <SelectionMenuAddNodes />
        </main>
    )
}

export default MainFoldersPage
