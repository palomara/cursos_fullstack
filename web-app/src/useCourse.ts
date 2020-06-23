import { useCallback, useEffect, useState } from "react";

const useCourse = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchCourse = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch("http://localhost:3333/courses/find");
    const data = await response.json();

    setItems(data);
    setIsLoading(false);
  }, [setIsLoading, setItems]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse, items]);

  return {
    fetchCourse,
    isLoading,
    items
  };
};

export default useCourse;
