import Visitor from "../models/visitor.model.js";

export const getVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 0 });
    }
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: "Failed to get visitor count" });
  }
};

export const trackVisitor = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      await visitor.save();
    }
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: "Failed to track visitor" });
  }
};
