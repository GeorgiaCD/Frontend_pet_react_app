import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { alignProperty } from '@mui/material/styles/cssUtils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4, 
  
  
  
};

export default function PetModal({pet}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const displayMessage = () => {
    if (pet.species==="DOG") {
      return (
        <div id="petmodal">
          <p>{pet.name} is a bundle of boundless energy and unshakable loyalty. Always wearing a wagging tail and a big, friendly grin, Derek is the life of the virtual pet party. He thrives on adventures and is up for any challenge the virtual world has to offer. With a heart full of love and a zest for life, he is the ultimate playmate and companion.</p>
        </div>
      
      )
    } else if (pet.species==="CAT") {
      return (
      <div id="petmodal">
        <p>{pet.name} is a curious and independent feline companion. She has a knack for finding hidden treasures in the virtual world and is often seen playfully pouncing on virtual shadows. Tomcat enjoys lounging in cozy corners and gazing out of virtual windows, but most of all she loves getting glam and her bedtime routine.</p>
      </div>) 
    } else if (pet.species==="BEAR") {
      return (
        <div id="petmodal">
          <p>{pet.name} is a lovable and huggable teddy bear with a heart as big as his fuzzy exterior. He exudes warmth and comfort, making him the perfect virtual friend for cozy nights and comforting chats. With a reassuring presence and a penchant for soothing virtual stories, Tarek is the guardian angel of the virtual pet world.</p>
        </div>
      
      )
    } else { 
      return (
        <div id="petmodal">
          <p>{pet.name} is the epitome of gentle sweetness. This fluffy bunny loves to hop around in virtual meadows and munch on virtual carrots. Her innocence and charm are simply irresistible, making her the go-to choice for those seeking a cuddly and nurturing virtual friend. Peach's presence brings warmth and coziness to the virtual world.</p>
        </div>
      
      )
  }
}

  return (
    <div>
      <Button id="modal-button" variant= "contained" onClick={handleOpen}>Summary</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Who is {pet.name}?
          </Typography>
          <Typography id="petmodal-image">
            <img src={`pet_images/pet_${pet.species}3.gif`} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {displayMessage()}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

