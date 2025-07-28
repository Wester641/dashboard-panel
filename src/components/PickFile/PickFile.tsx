import styles from "./PickFile.module.scss";
import cursor from "../../assets/cursor.svg";
import deleteIcon from "../../assets/delete.svg";
import imgIcon from "../../assets/img.svg";
import { useState } from "react";

function PickFile() {
  const [files, setFiles] = useState<File[]>([]);

  const handleDelete = (indexToDelete: number) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToDelete)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };
  return (
    <div className={styles.pickFileContainer}>
      <label htmlFor="file">
        <img src={cursor} alt="cursor" />
        Pick File
      </label>

      {files.map((file, index) => (
        <p key={index} className={styles.fileNameContainer}>
          <div>
            <img src={imgIcon} alt="img" />
            <span className={styles.fileName}>{file.name}</span>
            <img
              className={styles.deleteIcon}
              onClick={() => handleDelete(index)}
              src={deleteIcon}
              alt="delete"
            />
          </div>
        </p>
      ))}

      <input multiple type="file" id="file" onChange={handleChange} />
    </div>
  );
}

export default PickFile;
