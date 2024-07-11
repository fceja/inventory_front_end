import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from "redux";

import { RootState } from "@store/ConfigureStore";
import { setSelectedFolderId, setSelectedFolderName, FolderActionT } from "@store/folder/FolderActions";
import FolderModal from "@components/_modals/folder/FolderModal"
import { setSelectedItemId, ItemActionT } from "@store/item/ItemActions";
import ItemModal from "@components/_modals/item/ItemModal"
import { setIsFolderModalOpen, setIsItemModalOpen, ModalActionT } from "@store/modal/ModalActions";
import { FolderModelI, ItemModelI } from "@common/Models"

interface PropsI {
    searchResults: {
        folders: FolderModelI[] | null,
        items: ItemModelI[] | null
    }
}

const ListSearchResults = (props: PropsI) => {
    const { searchResults } = props
    const dispatch: Dispatch<FolderActionT | ItemActionT | ModalActionT> = useDispatch();
    const { isFolderModalOpen, isItemModalOpen } = useSelector((state: RootState) => state.modalState);
    const [folderResultsEmpty, setFolderResultsEmpty] = useState(true)
    const [itemResultsEmpty, setItemResultsEmpty] = useState(true)

    useEffect(() => {
        searchResults.folders && searchResults.folders.length > 0 ?
            setFolderResultsEmpty(false) : setFolderResultsEmpty(true)


        searchResults.items && searchResults.items.length > 0 ?
            setItemResultsEmpty(false) : setItemResultsEmpty(true)

    }, [searchResults])

    const handleFolderClick = (folderId: number, name: string) => {
        dispatch(setSelectedFolderId(folderId))
        dispatch(setSelectedFolderName(name))
        dispatch(setIsFolderModalOpen(true))
    }

    const handleItemClick = (itemId: string) => {
        dispatch(setSelectedItemId(itemId))
        dispatch(setIsItemModalOpen(true))
    }

    return (
        <div className="search-results-list">
            {searchResults.folders !== null && searchResults.items !== null &&
                <>
                    <div className="folder-results">
                        Folder results:
                        {folderResultsEmpty ? (
                            <div className="empty-search">[None]</div>
                        ) : (
                            <ul>
                                {searchResults.folders.map((elem) => (
                                    <li
                                        className="li-folder"
                                        key={`li-folder-${elem.folderId}`}
                                        onClick={() => handleFolderClick(elem.folderId, elem.name)}
                                    >
                                        {elem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="item-results">
                        Item results:
                        {itemResultsEmpty ? (
                            <div className="empty-search">[None]</div>
                        ) : (
                            <ul>
                                {searchResults.items.map((elem) => (
                                    <li
                                        className="li-item"
                                        key={`li-item-${elem.itemId}`}
                                        onClick={() => handleItemClick(elem.itemId)}
                                    >
                                        {elem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {isFolderModalOpen &&
                        <FolderModal />
                    }
                    {isItemModalOpen &&
                        <ItemModal />
                    }
                </>
            }
        </div>
    )
}
export default ListSearchResults