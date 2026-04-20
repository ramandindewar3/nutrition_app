import { useState, useEffect, useMemo } from 'react';
import { Container, Typography, Box } from '@mui/material';
import NutritionList from './components/NutritionList';
import AddNutrition from './components/AddNutrition';
import { getNutrition, addNutrition, deleteNutrition } from './services/api';
import type { Nutrition } from './types';

function App() {
  const [nutritionList, setNutritionList] = useState<Nutrition[]>([]);

  const fetchNutrition = async () => {
    try {
      const data = await getNutrition();
      setNutritionList(data);
    } catch (error) {
      console.error('Error fetching nutrition:', error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchNutrition();
  }, []);

  const handleAdd = async (newItem: Omit<Nutrition, 'id'>) => {
    try {
      const addedItem = await addNutrition(newItem);
      setNutritionList([...nutritionList, addedItem]);
    } catch (error) {
      console.error('Error adding nutrition:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteNutrition(id);
      setNutritionList(nutritionList.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting nutrition:', error);
    }
  };

  const totalCalories = useMemo(() => {
    return nutritionList.reduce((sum, item) => sum + item.calories, 0);
  }, [nutritionList]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Nutrition Tracker
      </Typography>
      <AddNutrition onAdd={handleAdd} />
      <NutritionList nutritionList={nutritionList} onDelete={handleDelete} />
      <Box mt={2}>
        <Typography variant="h6">
          Total Calories: {totalCalories}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
