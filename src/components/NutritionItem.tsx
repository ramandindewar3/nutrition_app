import type { Nutrition } from '../types';

interface NutritionItemProps {
  nutrition: Nutrition;
  onDelete: (id: string) => void;
}

const NutritionItem = ({ nutrition, onDelete }: NutritionItemProps) => {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.12)' }}>
      <span>{nutrition.foodName}: Calories {nutrition.calories}, Protein {nutrition.protein}g</span>
      <button type="button" onClick={() => onDelete(String(nutrition.id))} style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer' }}>
        Delete
      </button>
    </li>
  );
};

export default NutritionItem;