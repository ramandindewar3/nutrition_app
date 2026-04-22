import NutritionItem from './NutritionItem';
import type { Nutrition } from '../types';

interface NutritionListProps {
  nutritionList: Nutrition[];
  onDelete: (id: string) => void;
}

const NutritionList = ({ nutritionList, onDelete }: NutritionListProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {nutritionList.map((item) => (
        <NutritionItem key={String(item.id)} nutrition={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default NutritionList;