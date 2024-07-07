import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import "@scss/components/mainFolderPage/FolderLevelUp.scss"
import { RootState } from "@store/ConfigureStore";
import { PAGE_PATHS } from "@common/Constants"

const FolderLevelUp = () => {
    const [isDisabled, setIsDisabled] = useState(false)
    const { folderId, parentFolderId } = useSelector((state: RootState) => state.folderState);

    useEffect(() => {
        // if folderId equals zero, at root folder (no parent folders)
        folderId === 0 ? setIsDisabled(true) : setIsDisabled(false)

    }, [folderId])

    return (
        <>
            {!isDisabled ?
                <Link className={'folder-level-up'} to={`${PAGE_PATHS.FOLDERS.replace(":folderId", `${parentFolderId}`)}`}>
                    {/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z" /></svg>
                </Link>
                :
                <span className={'folder-level-up disabled'}>
                    {/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c53 0 96-43 96-96l0-306.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 416c0 17.7-14.3 32-32 32l-96 0z" /></svg>
                </span>
            }
        </>
    )
}

export default FolderLevelUp