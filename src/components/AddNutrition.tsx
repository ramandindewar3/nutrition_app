import { useState, FormEvent } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import type { Nutrition } from '../types';

interface AddNutritionProps {
  onAdd: (nutrition: Omit<Nutrition, 'id'>) => void;
}

const AddNutrition = ({ onAdd }: AddNutritionProps) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (foodName && calories && protein) {
      onAdd({
        foodName,
        calories: parseFloat(calories),
        protein: parseFloat(protein),
      });
      setFoodName('');
      setCalories('');
      setProtein('');
    }
  };

  const textFieldSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff',
      borderRadius: 2,
    },
    '& .MuiOutlinedInput-input': {
      color: '#111111',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#d6d2db',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#9f95a9',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#6a61a9',
    },
  };

  const formLabelSx = {
    color: '#5f5f6d',
    fontWeight: 700,
    fontSize: '0.95rem',
    letterSpacing: '0.01em',
    mb: 0.5,
  };

  const fieldBoxSx = {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
      <Box sx={{ ...fieldBoxSx, flex: '1 1 380px' }}>
        <Typography sx={formLabelSx}>Food name</Typography>
        <TextField
          placeholder="e.g. Grilled chicken"
          variant="outlined"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          required
          aria-label="Food name"
          sx={textFieldSx}
        />
      </Box>
      <Box sx={{ ...fieldBoxSx, flex: '1 1 180px' }}>
        <Typography sx={formLabelSx}>Calories (kcal)</Typography>
        <TextField
          placeholder="e.g. 240"
          type="number"
          variant="outlined"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
          aria-label="Calories"
          sx={textFieldSx}
        />
      </Box>
      <Box sx={{ ...fieldBoxSx, flex: '1 1 180px' }}>
        <Typography sx={formLabelSx}>Protein (g)</Typography>
        <TextField
          placeholder="e.g. 28"
          type="number"
          variant="outlined"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          required
          aria-label="Protein"
          sx={textFieldSx}
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ alignSelf: 'center', height: 56 }}>Add</Button>
    </Box>
  );
};

export default AddNutrition;