# Art List Exercise

Web app built with React components to retrieve an array of IDs and then to retrieve the metadata for each ID and render images and metadata in a an interesting way.

Application was built using Meteor with React package. To run the web app install Meteor, clone repo, and run meteor from within the project folder.

```
curl https://install.meteor.com/ | sh
git clone https://github.com/warmbowski/art-list-exercise.git
cd art-list-exercise
meteor run
```

### Roadmap
* So far, only the thumbnails and a metadata pop-over has been created. The plan is to have a modal lightbox for displaying the full size image with full metadata.
* Add some transition:
  * improve pagination to show number of images
  * add list of filters, based on available metadata
  * fade-in for loading of image list
  * pop-over show/hide
  * modal lightbox show/hide
