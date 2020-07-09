import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import BlogList from '../components/BlogList';

export default {
  title: 'Blog List',
  component: BlogList,
  excludeStories: /.*Data$/,
};

export const blogData = [
  {
    id: Date.now(),
    title: 'Test Title',
    content: 'Test Content',
  },
  {
    id: Date.now(),
    title: 'Sample Title',
    content: 'Sample Content', 
  }
];

export const Default = () => <BlogList blogsViaProps={blogData} />;



export const Text = () => <Button onClick={action('clicked')}>New Form</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
