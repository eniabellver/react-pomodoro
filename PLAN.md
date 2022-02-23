# Create a Pomodoro timer using React


## App behaviour:
- 3 timers displayed: pomodoro, short break and long break
    - Pomodoro is 25 minutes by default
    - Short break is 5 minutes by default
    - Long break is 15 minutes by default
- Start and stop button for timers
- Skip button to go forward to the next stage
- Settings button that shows a settings modal where the default timers can be edited
- A to-do list for tasks to be done during the pomodoro
    - Tasks with estimated pomodoros to complete
    - Task card shows the estimated pomodoros, how many have been done, and estimated finish time

## Components:
- __App__
    - Behaviour: Allow users to set up, stop and skip a timer, with different types (pomodoro, short break/long break)
    - Render: Header, Display, Task List
    - Props: 
- __Header__
    - Behaviour: Show page title, settings button
    - Render: Heading, Settings Button
    - Props: -
- __Display__
    - Behaviour: Display a Timer with buttons
    - Render: Timer, Buttons
    - Props: time, interval
- __Timer__
    - Behaviour: Show the current timer
    - Render: Time
    - Props: time, interval
- __Task list__
    - Behaviour: Add task, read, delete and edit
    - Render: Tasks, new task button
    - Props: tasks, addTask, deleteTask
- __Task__
    - Behaviour: Read task, edit, delete
    - Render: Task
    - Props: tasks, deleteTask, editTask

## Component tree:

- APP
    - Header
        - SettingsBtn
            - SettingsModal
    - Display
        - Timer
        - Intervals
            - IntervalBtn
        - StartBtn
        - SkipBtn
    - TaskList
        - NewTaskBtn
        - Task