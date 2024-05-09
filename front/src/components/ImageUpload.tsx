import { Avatar, Box, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRef, useState } from 'react';

type AvatarUploadProps = {
  image: File | null;
  setImage: (file: File | null) => void;
};

export const AvatarUpload = ({ image, setImage }: AvatarUploadProps) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [url, setUrl] = useState<string>('');

  const handleOnChange = (event: any) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setUrl(URL.createObjectURL(newImage));
      setImage(newImage);
    }
  };

  const handleReset = () => {
    if (inputFileRef.current) {
      setUrl('');
      setImage(null);
      inputFileRef.current.value = '';
    }
  };

  const handleClear = (event: { preventDefault: () => void }) => {
    if (image) {
      event.preventDefault();
      handleReset();
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <>
        <input ref={inputFileRef} accept="*" id="upload-avatar-pic" type="file" hidden onChange={handleOnChange} />
        <label htmlFor="upload-avatar-pic">
          <IconButton component="span">
            <Avatar src={url} sx={{ width: '88px', height: '88px', marginBottom: '16px' }} />
          </IconButton>
        </label>

        {image ? (
          <IconButton component="span" sx={{ width: '24px', height: '24px', color: 'red' }}>
            <DeleteIcon onClick={handleClear} />
          </IconButton>
        ) : (
          <Typography> Click na imagem para fazer o upload</Typography>
        )}
      </>
    </Box>
  );
};
